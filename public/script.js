const form = document.getElementById('form-concepto');
const lista = document.getElementById('lista');

async function cargarConceptos() {
  const res = await fetch('/api/conceptos');
  const data = await res.json();
  lista.innerHTML = '';
  data.forEach(c => {
    const li = document.createElement('li');
    li.textContent = `${c.nombre}: ${c.descripcion}`;
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

cargarConceptos();
