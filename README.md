# Galeria de fotos

Recentemente li um artigo do Clóvis Neto sobre a [criação de componentes apenas com CSS](https://clovisdasilvaneto.github.io/criando-componentes-apenas-com-css) e fiquei extremamente interessado no assunto, principalmente na aparente melhora de performance da página. Dito isso, decidi criar uma galeria de fotos com a maior quantidade de componentes em puro CSS possível.

O projeto foi desenvolvido utilizando a framework **React.js** e as tecnologias **CSS, SASS e JavaScript**. Já para o desenvolvimento da Interface de Usuário, utilizei a ferramenta **Figma**, além dos plugins **Iconify e Unsplash**.

### Detalhes do projeto

O objetivo é criar uma página única para a visualização de um produto, que deve conter as seguintes características:

- Ser responsivo.
- Conter uma lightbox.
- Não utilizar bibliotecas CSS.
- Manter uma estética coerente.

### Interface de Usuário

Alguns detalhes da interface são:

- A API utilizada é a da [Pexels.](https://www.pexels.com/api/documentation/#photos)
- Os ícones utilizados são da [Box Icons.](https://boxicons.com/)
- Existirão três telas: Fotos, Lightbox\* e Sobre.
- O projeto contará com modo claro e modo escuro.

\*Na versão mobile, a Lightbox não está presente.

| Wireframe |
| --------- |

![Wireframe](./resources/images/wireframe.png)

| Protótipo |
| --------- |

![Protótipo](./resources/images/prototype.png)

### Desenvolvimento

#### Organizando os Arquivos

Comecei o projeto organizando as pastas, as telas foram para a pasta **container**, já os componentes básicos para a pasta **components** e todos os arquivos SVG foram colocados na **assets**. Para facilitar a troca do tema, decidi centralizar todos os estilos globais em uma pasta chamada **style** que contém o arquivo global.scss.

#### Criando o theme switcher

Para a troca de tema, criei um estilo no arquivo global.scss chamado _theme_ e defini as variáveis $main-color, $bg-color e $secondary-color utilizando o **@mixin** do SASS. Então criei dois IDs, o _light-theme_ e o _dark-theme_ e utilizei o **@include** para usar como base o _theme_, apenas alterando as variáveis quando necessário. Segue parte do código para exemplificação:

    @mixin theme($main-color: #1C1C1E, $bg-color: #F1FAFC, $secondary-color: darkBlue)
        #body {
            color: $main-color;
            background-color: $bg-color;
            font-family: -apple-system, BlinkMacSystemFont, Roboto, Ubuntu, "Open Sans",
              "Helvetica Neue", sans-serif;

        ...outros códigos de estilo
        }
    }

    #light-theme {
        @include theme
    }

    #dark-theme {
        @include theme($main-color: #f1fafc, $bg-color: #1c1c1e, $secondary-color: lightBlue)
    }

Note que todos os códigos de estilo aplicados globalmente estão dentro de _theme_ facilitando assim a adição, ou remoção, de estilos futuramente.
