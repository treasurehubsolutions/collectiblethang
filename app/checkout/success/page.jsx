import Link from 'next/link'
export default function SuccessPage() {
  return (
    <div style={{maxWidth:500,margin:'80px auto',padding:'0 24px',textAlign:'center'}}>
      <div style={{fontSize:72,marginBottom:16}}>🎉</div>
      <h1 style={{fontFamily:'Bebas Neue',fontSize:36,letterSpacing:3,color:'#d4a800',marginBottom:8}}>THANK YOU!</h1>
      <p style={{color:'#666',fontSize:15,marginBottom:32,lineHeight:1.7}}>Your payment has been confirmed.<br/>A confirmation email will be sent shortly.</p>
      <Link href="/shop" style={{display:'inline-block',background:'#cc1100',color:'#fff',padding:'14px 32px',borderRadius:6,fontWeight:800,fontSize:15,textDecoration:'none'}}>
        CONTINUE SHOPPING &#8594;
      </Link>
    </div>
  )
}
