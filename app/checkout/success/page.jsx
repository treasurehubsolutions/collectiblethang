import Link from 'next/link'
export default function SuccessPage() {
  return (
    <div style={{maxWidth:500,margin:'80px auto',padding:'0 24px',textAlign:'center'}}>
      <div style={{fontSize:72,marginBottom:16}}>🎉</div>
      <h1 style={{fontFamily:'Bebas Neue',fontSize:36,letterSpacing:3,color:'#e8b820',marginBottom:8}}>MERCI !</h1>
      <p style={{color:'#666',fontSize:15,marginBottom:32,lineHeight:1.7}}>Votre paiement a été confirmé.<br/>Un email de confirmation vous sera envoyé sous peu.</p>
      <Link href="/shop" style={{display:'inline-block',background:'#e8b820',color:'#000',padding:'14px 32px',borderRadius:6,fontWeight:800,fontSize:15,textDecoration:'none'}}>CONTINUER LES ACHATS →</Link>
    </div>
  )
}
