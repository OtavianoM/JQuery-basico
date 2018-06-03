  $(document).ready(function() {
  // fuction tem o papel de executa a funcao, parece um pouco com seletores
    $('#conteudo').load('pages/home.html');
    // no seletor id name carregue as pag
    $('#name').html('<h1>Otaviano Marques</h1>');
    // passando como html, mostre no seletor id name o nome em h1
    $('#menu a').click(function () {
      // fucao que ativa no click
      let url = $(this).attr('href'); // referenciando com o this
      $.ajax({
        // nao entendi muito, mas o ajax ajuda no upload da pag
          url: url,
          method: 'GET'
        })
        .done(function (response) {
          $('#conteudo').html(response);
        });
      return false;
    })
  });