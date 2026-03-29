export const dynamic = 'force-dynamic'
export async function POST(req) {
  try {
    const { items, toPostal, toCountry, toState } = await req.json()
    const totalWeight = items.reduce((s,i)=>s+(i.weight||250)*i.qty,0)
    const totalValue = items.reduce((s,i)=>s+i.price*i.qty,0)
    if (totalValue>=150) return Response.json({rates:[{service:'FREE',name:'🎉 Free Shipping',amount:'0.00',currency:'CAD',days:'5-10 days'}],free:true})
    const box = estimateBox(totalWeight)
    const resp = await fetch('https://api.goshippo.com/shipments/',{
      method:'POST',
      headers:{'Authorization':`ShippoToken ${process.env.SHIPPO_API_KEY}`,'Content-Type':'application/json'},
      body: JSON.stringify({
        address_from:{name:'Born2BeToys',street1:'1 Rue Principale',city:'Trois-Rivieres',state:'QC',zip:process.env.SHIP_FROM_POSTAL||'G8T2K4',country:'CA'},
        address_to:{name:'Customer',street1:'1 Main St',city:'City',state:toState||(toCountry==='CA'?'ON':'NY'),zip:toPostal.replace(/\s/g,''),country:toCountry||'CA'},
        parcels:[{length:String(box.l),width:String(box.w),height:String(box.h),distance_unit:'cm',weight:String(Math.max(totalWeight/1000,0.1).toFixed(3)),mass_unit:'kg'}],
        async:false
      })
    })
    const data = await resp.json()
    const wanted = toCountry==='CA'?['canada_post']:['usps','ups']
    const rates = (data.rates||[])
      .filter(r=>wanted.includes(r.provider?.toLowerCase())&&r.amount&&parseFloat(r.amount)>0)
      .map(r=>({service:r.servicelevel?.token||'std',name:fmtName(r.provider,r.servicelevel?.name),amount:parseFloat(r.amount).toFixed(2),currency:r.currency,days:r.estimated_days?`${r.estimated_days} days`:'5-10 days'}))
      .sort((a,b)=>parseFloat(a.amount)-parseFloat(b.amount)).slice(0,4)
    return Response.json({rates:rates.length?rates:fallback(totalWeight,toCountry)})
  } catch(e) { return Response.json({rates:fallback(250,'CA')}) }
}
function estimateBox(g){
  if(g<=100)return{l:15,w:10,h:5}
  if(g<=300)return{l:20,w:15,h:8}
  if(g<=600)return{l:25,w:20,h:12}
  if(g<=1000)return{l:30,w:25,h:15}
  return{l:40,w:30,h:20}
}
function fmtName(p,n){
  if(p==='canada_post'){
    if(n?.includes('Expedited'))return '📦 Canada Post Expedited (3-7 days)'
    if(n?.includes('Xpresspost'))return '⚡ Canada Post Xpresspost (1-2 days)'
    if(n?.includes('Regular'))return '📬 Canada Post Regular (5-10 days)'
    if(n?.includes('Priority'))return '🚀 Canada Post Priority (1 day)'
    return `📦 Canada Post ${n}`
  }
  return `🇺🇸 ${p?.toUpperCase()} ${n}`
}
function fallback(g,c){
  if(c==='CA'){
    if(g<=200)return[{service:'fb',name:'📦 Standard Canada (5-10 days)',amount:'9.99',currency:'CAD',days:'5-10 days'}]
    if(g<=500)return[{service:'fb',name:'📦 Standard Canada (5-10 days)',amount:'11.99',currency:'CAD',days:'5-10 days'}]
    if(g<=1000)return[{service:'fb',name:'📦 Standard Canada (5-10 days)',amount:'14.99',currency:'CAD',days:'5-10 days'}]
    return[{service:'fb',name:'📦 Standard Canada (5-10 days)',amount:'19.99',currency:'CAD',days:'5-10 days'}]
  }
  if(g<=500)return[{service:'fb',name:'🇺🇸 USPS Standard (7-14 days)',amount:'14.99',currency:'CAD',days:'7-14 days'}]
  return[{service:'fb',name:'🇺🇸 USPS Standard (7-14 days)',amount:'24.99',currency:'CAD',days:'7-14 days'}]
}
