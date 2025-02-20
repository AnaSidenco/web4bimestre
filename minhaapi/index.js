function procurarPersonagem() {
    const personagem = document.getElementById('personagem').value.toLowerCase();
    const url = `https://naruto-br-api.site/characters`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        
        const resultado = data.find(char => char.name.toLowerCase().includes(personagem));

        if (resultado) {
          
          const imagemLink = resultado.profile_image || (resultado.images && resultado.images.length > 0 ? resultado.images[0] : 'placeholder.jpg');
          
          
          document.getElementById('imagem').src = imagemLink;
          document.getElementById('nome').innerText = resultado.name;
          document.getElementById('pai').innerText = resultado.father ? resultado.father.name : 'Desconhecido';
          document.getElementById('mae').innerText = resultado.mother ? resultado.mother.name : 'Desconhecida';
          document.getElementById('vila').innerText = resultado.village ? resultado.village.name : 'Desconhecida';

          
          document.getElementById('card').style.display = 'block';
        } else {
          alert("Personagem não encontrado!");
        }
      })
      .catch(error => {
        console.error("Erro na busca:", error);
        alert("Erro ao buscar o personagem.");
      });
}
