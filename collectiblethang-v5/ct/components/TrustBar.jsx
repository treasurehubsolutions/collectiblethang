export default function TrustBar() {
  return (
    <div style={{ background: '#05050a', borderTop: '1px solid #1c1c28', padding: '16px 24px' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
        {[['🔒', 'Secure Payment', 'Stripe SSL'],['📦', 'Careful Packaging', 'Every order'],['⭐', '100% Feedback', 'eBay verified'],['🇨🇦', 'Ships from Quebec', 'Canada & USA'],['↩️', '30-Day Returns', 'Easy returns']].map(([icon, title, sub]) => (
          <div key={title} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 20, marginBottom: 4 }}>{icon}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#aaa' }}>{title}</div>
            <div style={{ fontSize: 10, color: '#555' }}>{sub}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
