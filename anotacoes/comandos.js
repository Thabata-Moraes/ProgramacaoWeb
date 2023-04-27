//Para rodar arquivos: node nomedoarquivo 

//Para ver as pastas dentro do diretório: ls 
//Para entrar em diretórios: cd nomedapasta
//Para voltar 1 nível: cd .. 
//Para retornar a pasta raiz: cd 


//Renderiza uma vez só por pág ou por aplicação?


/*

    Kent C. Dodds - bacana para estudar, pessoa em que Fausto se baseia. 

    Local storage armazena dados, só é perdido quando limpar o cache do navegador
    session storage faz essa função enquanto o navegador não é fechado  

    useEffect -> efeito colateral realizado a partir de outra ação

    operador ?? -> se a primeira parte for verdade, se existir, ela será executada, caso não a segunda será
    window.localStorage.getItem('name') ?? initialName 


    SPA -> single page aplication -> recarrega só parte 
    
    
    Estado elevado: deixa no pai os estados para que possa ser compartilhado entre filhos 
    Estado colocado: quando o compartilhamento de um estado não é necessário, dessa forma ele permanece no mesmo component. "Rebaixa".


    Três tipos de useEffect:
    1. Sem vetor de dependência: executado após toda e qualquer atualização
    2. Com vetor de dependência não vazio: executado após atualizações de variáveis listadas no vetor
    3. Com vetor de dependência VAZIO: executado apenas na primeira atualização, logo após a fase de mount 

*/