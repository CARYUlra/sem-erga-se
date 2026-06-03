# 🧮 Algoritmos com Vetores em JavaScript

> Repositório dedicado à resolução de algoritmos utilizando estruturas de vetores (arrays) em JavaScript, focando no desenvolvimento da lógica de programação pura e no versionamento de código com Git.

---

## 📑 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Restrições e Objetivos](#-restrições-e-objetivos)
- [Lista de Tarefas](#-lista-de-tarefas)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Executar](#-como-executar)

---

## 📖 Sobre o Projeto

Este projeto contém uma série de programas em JavaScript (extensão `.js`) criados para resolver problemas lógicos utilizando vetores. Todos os algoritmos foram devidamente testados e garantem o funcionamento correto. 

Além do desenvolvimento da lógica, este repositório é fruto da prática de **versionamento de código**, mantendo o histórico de alterações tanto no repositório local quanto no remoto via Git.

---

## ⚠️ Restrições e Objetivos

O principal desafio e objetivo de aprendizado desta lista de exercícios é a **proibição do uso de funções nativas de arrays do JavaScript** (como `.reverse()`, `.filter()`, `.includes()`, `.push()`, etc.). 

Toda a manipulação dos vetores, inserção de dados, buscas e inversões foram construídas manualmente utilizando laços de repetição (como `for` e `while`) e lógica estruturada.

---

## 📝 Lista de Tarefas

Abaixo estão os 4 programas desenvolvidos neste repositório:

### 1. Inversão de Nomes
Programa que lê 7 nomes de pessoas e os guarda em um vetor. Ao final, exibe uma listagem com todos os nomes informados, **na ordem inversa** daquela em que foram digitados.

### 2. Acima da Média
Programa que lê um vetor com 8 números reais, calcula a **média** dos valores armazenados e, em seguida, exibe apenas os valores do vetor que estão acima da média calculada.

### 3. Filtro de Menores de Idade (Vetores Paralelos)
Programa que lê o nome e a idade de 9 pessoas, guardando esses valores em **dois vetores distintos, mas em posições relacionadas** (mesmo índice). Ao final, mostra uma listagem contendo apenas o nome e a idade das pessoas menores de idade.

### 4. Interseção de Vetores
Programa que lê dois vetores de 5 elementos cada (valores inteiros). O algoritmo cria um terceiro vetor contendo apenas os elementos que estão **em ambos os vetores (interseção)**, garantindo que não haja repetição de números.
* **Exemplo de Entrada:** Vetor 1 `[1, 2, 3, 4, 5]` | Vetor 2 `[3, 4, 5, 6, 7]`
* **Exemplo de Saída:** Resultado `[3, 4, 5]`

---

## 💻 Tecnologias Utilizadas

* **JavaScript:** Linguagem utilizada para a resolução lógica dos algoritmos.
* **Git & GitHub:** Utilizados para o controle de versão local e remoto.
* **Node.js / Navegador:** Ambientes de execução para testar os scripts.

---

## 🚀 Como Executar

Você pode testar os algoritmos executando os arquivos `.js` diretamente no terminal através do Node.js, ou integrando-os a uma página HTML simples.

**Via Terminal (Node.js):**
```bash
# Clone o repositório
$ git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)

# Acesse a pasta
$ cd nome-do-repositorio

# Execute o arquivo desejado (exemplo da tarefa 1)
$ node tarefa1.js
