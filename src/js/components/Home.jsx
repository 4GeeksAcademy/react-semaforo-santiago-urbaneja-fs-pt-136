import React from "react";
import { useState } from "react";



//create your first component
const Home = () => {
	
	const [colorActivo, setColorActivo] = useState("");

	const obtenerClasesLuz = (colorDeEstaLuz) => {
		let clasesCSS = "luz luz-" + colorDeEstaLuz;

		if (colorActivo === colorDeEstaLuz) {
			clasesCSS = clasesCSS + " encendida";
		}

		// 3. Devolvemos el texto final
		return clasesCSS;
	};

	return (
		<div className="contenedor-semaforo">
			<div
				className={`luz luz-roja ${colorActivo === "roja" ? "encendida" : ""}`}
				onClick={() => setColorActivo("roja")}
			></div>

			<div
				className={obtenerClasesLuz("amarilla")}
				onClick={() => setColorActivo("amarilla")}
			></div>

			<div
				className={obtenerClasesLuz("verde")}
				onClick={() => setColorActivo("verde")}
			></div>
		</div>
	);
};

export default Home;