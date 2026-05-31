
export default function AdminPage() {
  return (
    <main style={{padding:40,fontFamily:'sans-serif'}}>
      <h1>🔐 Panel Admin</h1>

      <div style={{display:'flex',gap:10}}>
        <button>Exportar PDF</button>
        <button>Exportar Excel</button>
        <button>Imprimir insignias</button>
      </div>

      <table border="1" cellPadding="10" style={{marginTop:20}}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>DNI</th>
            <th>Pago</th>
            <th>Experiencia</th>
            <th>Salud</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Juan Pérez</td>
            <td>42123456</td>
            <td>🟢 Pagado</td>
            <td>Primera vez</td>
            <td>🔴 Alergia</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
