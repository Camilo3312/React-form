import './App.css'

export function App() {
	return (
		<div className="flex items-center justify-center w-full h-full bg-cyan-500 relative">
			<section className="absolute w-full max-w-md bg-white p-6 pb-16 rounded-sm shadow-sm">
				<form className="flex flex-col gap-6">
					<h1 className="text-4xl font-thin">Registro</h1>
					<section className="flex flex-col gap-4">
						<article className="flex flex-col gap-2">
							<label className="text-gray-600">Nombre</label>
							<input type="text" className="rounded-md border border-gray-300 p-2" />
						</article>
						<article className="flex flex-col gap-2">
							<label className="text-gray-600">Telefono</label>
							<input type="tel" className="rounded-md border border-gray-300 p-2" />
						</article>
						<article className="flex flex-col gap-2">
							<label className="text-gray-600">Correo</label>
							<input type="email" className="rounded-md border border-gray-300 p-2" />
						</article>
						<hr />
						<article className="flex flex-col gap-2">
							<label className="text-gray-600">Sector</label>
							<select className="p-2 pr-4 bg-white rounded-md border border-gray-300">
								<option value="north">
									Norte
								</option>
								<option value="south">
									Sur
								</option>
								<option value="east">
									Este
								</option>
								<option value="western">
									Oeste
								</option>
							</select>
						</article>
						<hr />
						<article className="flex flex-col gap-2">
							<label className="text-gray-600">Horarios</label>
							<section className="flex flex-col gap-2">
								<article className="flex gap-2">
									<input type="checkbox" className="w-5" />
									<label htmlFor="">Mañana</label>
								</article>
								<article className="flex gap-2">
									<input type="checkbox" className="w-5" />
									<label htmlFor="">Tarde</label>
								</article>
								<article className="flex gap-2">
									<input type="checkbox" className="w-5" />
									<label htmlFor="">Domingos y festivos</label>
								</article>
							</section>
						</article>
						<article>
							<label className="text-gray-600">Paquete de datos</label>
							<section>
								<article className="flex gap-2">
									<input name="pack" type="radio" className="w-5" />
									<label htmlFor="">Inicial</label>
								</article>
								<article className="flex gap-2">
									<input name="pack" type="radio" className="w-5" />
									<label htmlFor="">Veterano</label>
								</article>
								<article className="flex gap-2">
									<input name="pack" type="radio" className="w-5" />
									<label htmlFor="">Premier</label>
								</article>
							</section>
						</article>
						<article className="flex flex-col gap-2">
							<label className="text-gray-600">Fecha de ingreso</label>
							<input type="date" className="rounded-md border border-gray-300 p-2" />
						</article>
					</section>
				</form>
			</section>
		</div>
	)
}
