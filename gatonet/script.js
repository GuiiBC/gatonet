    //Variáveis para manipulação do DOM
    const botaoInscricao = document.getElementById("guilherme-btn-sub");
    const modalInscricao = document.getElementById("guilherme-modal-inscricao");
    const botaoFecharInscricao = document.getElementById("guilherme-fechar-inscricao");
    const formulario = document.getElementById("guilherme-form-inscricao");
    const mensagemErro = document.getElementById("guilherme-mensagem-erro");

    const modalTitulo = document.getElementById("guilherme-modal-titulo");
    const botaoFecharTitulo = document.getElementById("guilherme-fechar-titulo");
    const imgModal = document.getElementById("guilherme-titulo-imagem");
    const nomeModal = document.getElementById("guilherme-titulo-nome");
    const anoModal = document.getElementById("guilherme-titulo-ano");
    const generoModal = document.getElementById("guilherme-titulo-genero");
    const categoriaModal = document.getElementById("guilherme-titulo-categoria");
    const notaModal = document.getElementById("guilherme-titulo-nota");
    const classificacaoModal = document.getElementById("guilherme-titulo-classificacao");
    const descricaoModal = document.getElementById("guilherme-titulo-descricao");
    const trailerModal = document.getElementById("guilherme-titulo-trailer").querySelector("iframe");

    const imagemDestaque = document.getElementById("guilherme-imagem-destaque");
    const cards = document.querySelectorAll(".guilherme-card-filmes");

    //Esse é um array utilizado para armazenar o endereço das imagens que são mostradas no destaque
    const imagens = [
        "img/homem-aranha.jpg",
        "img/supergirl.jpg",
        "img/supermario.jpg",
        "img/jogos-vorazes.webp"
    ];

    //Esse é o indice utilizado para contar as imagens
    let indice = 0;

    //Lista de filmes e suas informações
    const catalogo = {
        scarface: {
            titulo: "Scarface",
            ano: 1983,
            genero: "Crime, Drama",
            categoria: "Filme",
            nota: 8.3,
            classificacao: "18 anos",
            sinopse: "Um imigrante cubano chamado Tony Montana chega a Miami e se envolve no mundo do crime, tornando-se um poderoso traficante de drogas.",
            trailer: "https://www.youtube.com/embed/7pQQHnqBa2E"
        },
        godfather: {
            titulo: "O Poderoso Chefão",
            ano: 1972,
            genero: "Crime, Drama",
            categoria: "Filme",
            nota: 9.2,
            classificacao: "18 anos",
            sinopse: "A história da família Corleone, uma das mais poderosas famílias mafiosas de Nova York, e a luta pelo poder e sobrevivência no mundo do crime.",
            trailer: "https://www.youtube.com/embed/UaVTIH8mujA"
        },
        killbill: {
            titulo: "Kill Bill",
            ano: 2003,
            genero: "Ação, Crime",
            categoria: "Filme",
            nota: 8.1,
            classificacao: "18 anos",
            sinopse: "Uma ex-assassina busca vingança contra aqueles que tentaram matá-la e destruir sua vida, enfrentando uma série de inimigos em seu caminho.",
            trailer: "https://www.youtube.com/embed/7kSuas6mRpk"
        },
        pulpfiction: {
            titulo: "Pulp Fiction",
            ano: 1994,
            genero: "Crime, Drama",
            categoria: "Filme",
            nota: 8.9,
            classificacao: "18 anos",
            sinopse: "Uma narrativa não linear que entrelaça várias histórias de criminosos em Los Angeles, explorando temas de violência, redenção e moralidade.",
            trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY"
        },
        breakingbad: {
            titulo: "Breaking Bad",
            ano: 2008,
            genero: "Crime, Drama",
            categoria: "Série",
            nota: 9.5,
            classificacao: "18 anos",
            sinopse: "Um professor de química do ensino médio se transforma em um fabricante de metanfetamina após ser diagnosticado com câncer, mergulhando no mundo do crime.",
            trailer: "https://www.youtube.com/embed/HhesaQXLuRY"
        },
        bettercallsaul: {
            titulo: "Better Call Saul",
            ano: 2015,
            genero: "Crime, Drama",
            categoria: "Série",
            nota: 8.7,
            classificacao: "16 anos",
            sinopse: "A história de Jimmy McGill, um advogado em dificuldades que eventualmente se transforma no inescrupuloso advogado Saul Goodman, antes dos eventos de Breaking Bad.",
            trailer: "https://www.youtube.com/embed/HN4oydykJFc"
        },
        sopranos: {
            titulo: "The Sopranos",
            ano: 1999,
            genero: "Crime, Drama",
            categoria: "Série",
            nota: 9.2,
            classificacao: "18 anos",
            sinopse: "A vida de Tony Soprano, um chefe da máfia de Nova Jersey, enquanto ele tenta equilibrar os desafios de sua vida familiar com os negócios criminosos que lidera.",
            trailer: "https://www.youtube.com/embed/KMx4iFcozK0"
        },
        house: {
            titulo: "House, M.D.",
            ano: 2004,
            genero: "Drama, Mistério",
            categoria: "Série",
            nota: 8.7,
            classificacao: "14 anos",
            sinopse: "O Dr. Gregory House, um médico brilhante mas anti-social, lidera uma equipe de diagnóstico em um hospital, resolvendo casos médicos complexos enquanto lida com seus próprios problemas pessoais.",
            trailer: "https://www.youtube.com/embed/6p7yNFN0bTA"
        },
        naruto: {
            titulo: "Naruto Shippuden",
            ano: 2007,
            genero: "Ação, Aventura",
            categoria: "Anime",
            nota: 8.6,
            classificacao: "12 anos",
            sinopse: "A continuação da história de Naruto Uzumaki, um jovem ninja que busca se tornar o Hokage de sua vila, enfrentando desafios e inimigos poderosos ao longo do caminho.",
            trailer: "https://www.youtube.com/embed/QczGoCmX-pI?si=87_zFh7BsdiVgOGt"
        },
        deathnote: {
            titulo: "Death Note",
            ano: 2006,
            genero: "Mistério, Suspense",
            categoria: "Anime",
            nota: 9.0,
            classificacao: "16 anos",
            sinopse: "Um estudante encontra um caderno sobrenatural que permite matar qualquer pessoa cujo nome seja escrito nele, levando-o a uma batalha intelectual com um detetive brilhante.",
            trailer: "https://www.youtube.com/embed/NlJZ-YgAt-c"
        },
        cowboybebop: {
            titulo: "Cowboy Bebop",
            ano: 1998,
            genero: "Ação, Aventura",
            categoria: "Anime",
            nota: 8.9,
            classificacao: "14 anos",
            sinopse: "Em um futuro distante, um grupo de caçadores de recompensas viaja pelo espaço em sua nave, enfrentando criminosos e lidando com seus passados enquanto buscam recompensas.",
            trailer: "https://www.youtube.com/embed/qig4KOK2R2g"
        },
        monster: {
            titulo: "Monster",
            ano: 2004,
            genero: "Mistério, Suspense",
            categoria: "Anime",
            nota: 8.7,
            classificacao: "16 anos",
            sinopse: "Um neurocirurgião salva a vida de um menino que se torna um serial killer, levando-o a uma jornada para confrontar o mal que ele inadvertidamente ajudou a criar.",
            trailer: "https://www.youtube.com/embed/1gLx8h3Z0kY"
        }
    };

    //Essa é uma função utilizada para mudar as imagens de destaque de acordo com a contagem do array. Como ela funciona: Ela pega a variável "indice" indicada lá em cima e acrescenta ao contador a cada vez que a função é executada. Assim que o contador ultrapassa o número de imagens no array o valor de indíce retorna a 0.
    function alternarImagem() {
        imagemDestaque.style.opacity = 0;

        setTimeout(() => {
            indice = (indice + 1) % imagens.length;
            imagemDestaque.src = imagens[indice];

            imagemDestaque.onload = () => {
            imagemDestaque.style.opacity = 1;
        };}, 1000);
    }
    //setInterval é utilizado para ativar a função alternarImagem a cada 5s.
    setInterval(alternarImagem, 7000);

    //Essa função é utilizada em conjunto com o CSS. Assim que a função abrirModalInscricao ou fecharModalInscricao é executado, o JavaScript adiciona ou remove a classe que mostra o modal na tela que permanece inativa e escondida enquanto não recebe um chamado.
    function abrirModalInscricao() {
        modalInscricao.classList.add("guilherme-aberto");
    }

    function fecharModalInscricao() {
        modalInscricao.classList.remove("guilherme-aberto");
        mensagemErro.textContent = "";
    }


    //Essa função é utilizada para abrir o modal de acordo com o filme clicado. Como ela funciona: A variável item identifica o id do filme especifico. E de acordo com o id do filme, o JavaScript pega as informações do objeto catalogo e adiciona no modal. O elementoImg é utilizado para pegar a imagem do card clicado e adicionar no modal.
    function abrirModalTitulo(idFilme, elementoImg) {
        const item = catalogo[idFilme];

        if (item) {
            imgModal.src = elementoImg.src;
            imgModal.alt = item.titulo;
            nomeModal.textContent = item.titulo;
            anoModal.textContent = "Ano: " + item.ano;
            generoModal.textContent = "Gênero: " + item.genero;
            categoriaModal.textContent = "Categoria: " + item.categoria;
            notaModal.textContent = "Nota: " + item.nota;
            classificacaoModal.textContent = "Classificação: " + item.classificacao;
            descricaoModal.textContent = item.sinopse;
            trailerModal.src = item.trailer? `${item.trailer}?autoplay=1`: "";

            modalTitulo.classList.add("guilherme-aberto");
        }
    }

    //Auto-explicativo.
    function fecharModalTitulo() {
        modalTitulo.classList.remove("guilherme-aberto");
        trailerModal.src = "";
    }

    //Essa função é utilizada para verificar se o formulário foi preenchido corretamente. Caso algum campo esteja incorreto, a função adiciona uma mensagem de erro no modal. Caso todos os campos estejam corretos, a função esconde o botão de inscrição e mostra a mensagem de usuário logado.
    function verificarFormulario() {
        const nome = document.getElementById("guilherme-nome").value;
        const email = document.getElementById("guilherme-email").value;
        const senha = document.getElementById("guilherme-senha").value;
        const confirmacaoSenha = document.getElementById("guilherme-confirma-senha").value;
        const dataNascimento = document.getElementById("guilherme-bday").value;
        const genero = document.getElementById("guilherme-genero").value;
        const sugestoes = document.getElementById("guilherme-sugestoes").value;
        const termos = document.getElementById("guilherme-termos").checked;

        if (nome.trim() === "") {
            mensagemErro.textContent = "Por favor, preencha o nome!";
            return;
        }

        if (email.trim() === "") {
            mensagemErro.textContent = "Por favor, preencha o e-mail!";
            return;
        }

        if (senha.trim() === "") {
            mensagemErro.textContent = "Por favor, preencha a senha!";
            return;
        }

        if (senha !== confirmacaoSenha) {
            mensagemErro.textContent = "As senhas não coincidem!";
            return;
        }

        if (dataNascimento === "") {
            mensagemErro.textContent = "Por favor, preencha a data de nascimento!";
            return;
        }

        if (genero === "") {
            mensagemErro.textContent = "Por favor, selecione o gênero.";
            return;
        }

        if (sugestoes.trim() === "") {
            mensagemErro.textContent = "Por favor, preencha as sugestões.";
            return;
        }

        if (termos === false) {
            mensagemErro.textContent = "Por favor, aceite os termos e condições.";
            return;
        }

        document.querySelector(".guilherme-button").style.display = "none";
        document.getElementById("guilherme-usuario-logado").style.display = "block";
        document.getElementById("guilherme-nome-usuario").textContent = "Bem-vindo, " + nome + "!";

        fecharModalInscricao();
        formulario.reset();
    }

    //Esse loop forEach é utilizado para adicionar um evento de click em cada card de filme. Assim que o card é clicado, a função abrirModalTitulo é chamada e o id do filme e a imagem do card são passados como parâmetros.
    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            abrirModalTitulo(card.dataset.filme, card.querySelector("img"));
        });
    });

    //Essa função window fecha o modal quando o usuário clica fora do modal. Ela verifica se o alvo do click é o modal e caso não seja, chama a função de fechar o modal.
    window.addEventListener("click", function (event) {
        if (event.target === modalInscricao) {
            fecharModalInscricao();
        }
        if (event.target === modalTitulo) {
            fecharModalTitulo();
        }
    });

    botaoInscricao.addEventListener("click", abrirModalInscricao);
    botaoFecharInscricao.addEventListener("click", fecharModalInscricao);
    botaoFecharTitulo.addEventListener("click", fecharModalTitulo);


    //Isso evita que o formulário resete a página ao ser enviado.
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        verificarFormulario();
    });