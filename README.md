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

Comecei o projeto organizando as pastas, as telas foram para a pasta **container**, já os componentes básicos para a pasta **components** e todos os arquivos SVG foram colocados na **assets**. Para facilitar a troca do tema, decidi centralizar todos os estilos globais em uma pasta chamada **style** que contém o arquivo global.scss.
