
const [element, setElement] = useState(false);
const [contador, setContador] = useState(0);
const [activar, setActivar] = useState(true)
useEffect(() => {
    if (activar) {
        const intervalo = setInterval(() => {
            setContador((prevcontador) => prevcontador + 1)
        }, 1000)

        return () => clearInterval(intervalo)
    }

}, [activar]);

// console.log(contador)
// 

const handleSee = () => {
    setElement(!element);
}
const parar = () => {
    setContador(0);
}
const iniciar = () => {
    setActivar(true);
}
const stop = () => {
    setActivar(false);
}
<div>
<button onClick={handleSee}>
    See Content
</button>

</div>
{element &&
<div className="App">
    <h1>Hello CodeSandbox</h1>
    <h2>Start editing to see some magic happen!</h2>
</div>
}
<p>
{contador}
</p>
<button onClick={iniciar}>start</button>
<button onClick={parar}>
Reset
</button>
<button onClick={stop}>stop</button>