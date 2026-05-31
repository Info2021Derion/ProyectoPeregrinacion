
export default function Home() {
  return (
    <main style={{padding:40,fontFamily:'sans-serif'}}>
      <h1>🎟️ Plataforma de Eventos</h1>

      <p>Formulario público de inscripción.</p>

      <form style={{display:'grid',gap:10,maxWidth:400}}>
        <input placeholder="Nombre" />
        <input placeholder="Apellido" />
        <input placeholder="DNI" />
        <input placeholder="Teléfono" />
        <input placeholder="Correo (opcional)" />

        <select>
          <option>Primera vez</option>
          <option>Participé anteriormente</option>
          <option>Fui parte del equipo</option>
          <option>Miembro activo</option>
        </select>

        <select>
          <option>Efectivo</option>
          <option>Transferencia</option>
          <option>Mercado Pago (Demo)</option>
        </select>

        <textarea placeholder="Alergias / salud"></textarea>

        <button>Inscribirme</button>
      </form>

      <hr />

      <h2>📂 Acceso participante</h2>

      <form style={{display:'grid',gap:10,maxWidth:300}}>
        <input placeholder="DNI" />
        <input placeholder="Teléfono" />
        <button>Acceder a archivos</button>
      </form>

      <p style={{marginTop:20,color:'gray'}}>
        Mercado Pago y WhatsApp deshabilitados en demo.
      </p>
    </main>
  )
}
