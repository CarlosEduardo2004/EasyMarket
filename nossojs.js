function validar_senha() {
	matricula = document.getElementById("matricula").value;
	senha = document.getElementById("senha").value;
	for (var i = 0; i < Mecanicos.length; i++) {
		Mec_aux = Mecanicos[i]
		if (Mec_aux["matricula"] == matricula) {
			if (Mec_aux["senha"] == senha) {
				alert("Acertô mizeravi, " + Mec_aux["nome"])
				window.location.href = "sistema.html"
				return
			} else {
				alert("Erroouu a senhaaa!")
				window.location.href = ""
				return 
			}
		}
	}
	alert("Ah Burro! Num sabe nem a matricula!")
	return	
}

	var preco = 0;
	var preco_final = 0;

function ads_service() {
	var table = document.getElementById("tabela");
	var input = document.getElementById("service").value
	var quantidade = document.getElementById("qnt_service").value
	var armazenar = document.getElementById("total")

	for (let index = 0; index < Servicos.length; index++) {
		let servicoauxiliar = Servicos[index]
		if (servicoauxiliar["id"] == input) {
			preco = servicoauxiliar["preco"] * quantidade;
			preco_final = preco_final + preco;
			table.innerHTML = table.innerHTML + "<tr><td>" + servicoauxiliar["id"] + "</td><td>" + servicoauxiliar['nome'] + "</td><td>" + servicoauxiliar["preco"] + "</td><td>" + quantidade + "</td><td> " + preco + "</td></tr>"
			armazenar.innerHTML = preco_final;
		}

	}

}

function calcular_troco() {
	var devolver = document.getElementById("troco");
	var receber = document.getElementById("value_give").value
	var troco = receber - preco_final;
	devolver.innerHTML = troco;
}