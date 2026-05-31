
export default function ConfigPage() {
  return (
    <main style={{padding:40,fontFamily:'sans-serif'}}>
      <h1>⚙️ Configuración</h1>

      <h2>WhatsApp</h2>
      <label>
        <input type="checkbox" />
        Activar integración
      </label>

      <p>No disponible en versión demo.</p>

      <h2>Mercado Pago</h2>

      <label>
        <input type="checkbox" />
        Activar pagos online
      </label>

      <p>No disponible en versión demo.</p>
    </main>
  )
}
