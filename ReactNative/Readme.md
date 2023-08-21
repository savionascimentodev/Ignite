### Densidade de pixels

Existem dois pixels:

- O **pixel de hardware** é de fato o ponto de luz na tela;
- Já o **pixel de software** é dinâmico e de acordo com a densidade de pixels na tela;

A Densidade de Pixels é o número total de pixels que existe dentro de um área física da tela (PPI - pixels per inch, ou pixel por polegada);

Quanto mais perto do dispositivo mais detalhes de visualização será requerido, ou seja, será necessário uma maior densidade de pixels (smartphone e tablet), quanto mais distante, menor poderá ser a densidade de pixels (TV, Projetores);

### Independência de Densidade

Foi criado uma medida que renderiza os elementos de uma forma independente das características e densidades de cada dispositivo. **Android - DPI** ('dots per inch', ou 'pontos por polegada') e iOS (points);

---

### Export e Export Default

Na exportação de um componente sem **default (nomeada)** fazemos a importação entre **chaves {}**, podemos importar várias funções, váriaveis...

```js
  // Exportação nomeada
  export function Home(){
    ...
  }
  // Importando
  import {Home} from './Home'

```

Na exportação **com default** não escolhemos exatamente o que queremos lá de dentro, **sem as chaves {}**

```js
  // Exportação nomeada
  export default function Home(){
    ...
  }
  // Importando
  import Home from './Home'

```
