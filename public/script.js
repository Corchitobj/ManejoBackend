const form = document.getElementById('form-concepto');
const lista = document.getElementById('lista');
const resultadoGet = document.getElementById('resultadoGet');

async function cargarConceptos() {
  const res = await fetch('/api/conceptos');
  const data = await res.json();
  lista.innerHTML = '';
  data.forEach(c => {
    const li = document.createElement('li');
    li.textContent = `${c.id}. ${c.nombre}: ${c.descripcion}`;
    lista.appendChild(li);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const descripcion = document.getElementById('descripcion').value;

  await fetch('/api/conceptos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, descripcion })
  });

  form.reset();
  cargarConceptos();
});

// Buscar concepto por ID
async function getConceptoPorId() {
  const id = document.getElementById('idGet').value;
  if (!id) return alert("Ingresa un ID");
  const res = await fetch(`/api/conceptos/${id}`);
  const data = await res.json();
  resultadoGet.textContent = JSON.stringify(data, null, 2);
}

// Eliminar concepto por ID
async function deletePorId() {
  const id = document.getElementById('idDel').value;
  if (!id) return alert("Ingresa un ID");
  await fetch(`/api/conceptos/${id}`, { method: 'DELETE' });
  cargarConceptos();
}

// Eliminar todos
async function deleteAll() {
  await fetch('/api/conceptos', { method: 'DELETE' });
  cargarConceptos();
}

cargarConceptos();
