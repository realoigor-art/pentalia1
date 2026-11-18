# Pentalia — leitura musical (piano primeiro)

Aplicativo de educação musical em **um único arquivo** (`index.html`): lições de leitura, treino de ouvido, partitura com escrita à mão (Apple Pencil), PDF e mais. Roda direto no navegador (Safari, Chrome), sem instalar nada e sem servidor.

> Versão de teste. O progresso de cada pessoa fica **só no aparelho dela** (armazenamento local do navegador). Não há contas nem servidor ainda.

## Como abrir (para quem vai testar)

1. Abra o link que você recebeu (formato `https://SEU-USUARIO.github.io/pentalia/`).
2. **iPad / iPhone (Safari):** botão Compartilhar → **Adicionar à Tela de Início**. Vira um ícone e abre em tela cheia.
3. **Android / computador (Chrome):** menu ⋮ → Adicionar à tela inicial.
4. Para escrever na partitura com caneta: aba **Partitura** → toque na pauta com a Apple Pencil.
5. Para mandar sugestões ou erros: **Partitura → Arquivo → "Copiar texto"** (registro da escrita) e cole numa mensagem. Descreva também o que você estava fazendo.

## Como colocar no GitHub e gerar o link clicável (GitHub Pages)

Faça uma vez só. Dá para fazer tudo pelo site, sem programar.

1. Crie uma conta em https://github.com (grátis).
2. Canto superior direito: **+ → New repository**.
   - Nome: `pentalia`
   - Marque **Public** (o GitHub Pages grátis exige repositório público; o código ficará visível. Para manter privado veja "Alternativas" abaixo).
   - Clique **Create repository**.
3. Na página do repositório: **uploading an existing file** (ou **Add file → Upload files**).
4. Arraste **todo o conteúdo desta pasta**: `index.html`, `.nojekyll`, a pasta `src`, a pasta `tests` e este `README.md`. Clique **Commit changes**.
   - No iPad: o Safari não deixa arrastar pastas; envie primeiro `index.html`, `.nojekyll` e `README.md`, depois use **Add file → Upload files** de novo para `src` e `tests` (ou use um computador).
5. Vá em **Settings → Pages**. Em **Build and deployment**, escolha **Deploy from a branch**, Branch **main**, pasta **/ (root)** → **Save**.
6. Espere cerca de 1 minuto e atualize a página. Aparece: **"Your site is live at https://SEU-USUARIO.github.io/pentalia/"**. Esse é o link para mandar às pessoas.

### Para atualizar o aplicativo depois
- Abra o repositório → clique em `index.html` → ícone do lápis ✏️ (ou **Add file → Upload files** com o arquivo novo, mesmo nome) → **Commit changes**.
- Em ~1 minuto o link mostra a versão nova. Quem já instalou na tela de início recebe ao reabrir (se não atualizar, feche o app por completo e abra de novo).
- Dica: depois de cada versão estável, em **Releases → Create a new release**, crie uma etiqueta (`v50`, `v51`…). Assim dá para voltar a uma versão antiga.

### Alternativas se não quiser repositório público
Netlify Drop (https://app.netlify.com/drop), Cloudflare Pages e Vercel aceitam arrastar a pasta e geram um link, inclusive com código privado.

## O que funciona fora do Claude (e o que não)

| Recurso | Fora do Claude (link do GitHub) |
|---|---|
| Lições, treino de ouvido, ritmo, partitura, escrita com caneta, repetições/voltas, exportar PDF, MusicXML | Funciona (arquivos baixam pelo navegador) |
| Reconhecimento de escrita com aprendizado local (registro ao vivo, ✔/✖) | Funciona; a calibração fica no aparelho |
| Importar PDF/imagem como referência | Imagem funciona offline; **PDF precisa de internet** (carrega o leitor do cdnjs) |
| **IA** como segunda opinião no reconhecimento ("IA") | **Não funciona**: depende do ambiente do Claude. O botão fica oculto sozinho |
| Contas, sincronização, área do professor | **Ainda não existem** (a área do professor aparece como "Em breve") |
| Buscar PDF na internet, transcrição automática de PDF | Aparecem como "em breve" (desativados) |

## Unificação com o Claude (como os dois ficam juntos)

- **O mesmo arquivo roda nos dois lugares.** O app detecta se está dentro do Claude e só então liga o que depende dele (IA e salvar arquivos pelo Claude). No GitHub Pages ele funciona como site comum.
- **O GitHub vira a "fonte da verdade".** O código-fonte está em `src/` (`base11.html`, `editor.js`, `teacher.js`, `guitar.js`) e `src/build.py` gera o `index.html`:
  ```
  cd src
  python3 build.py        # gera ../index.html
  ```
  `tests/smoke.py` é um teste de fumaça (precisa de Python + Playwright) que abre todas as telas em 3 tamanhos de tela e conta erros.
- **Continuar evoluindo com o Claude:** numa conversa do Claude Code (web ou desktop), conecte este repositório (o Claude consegue anexar repositórios do GitHub à sessão). Peça: *"edite o src, rode o build e os testes e abra um pull request"*. Você revisa e aceita (**Merge**) no GitHub, e o link se atualiza sozinho.
- **Versão dentro do Claude (artefato):** continua útil para testar rápido e para recursos de IA. Peça ao Claude para publicar o mesmo `index.html` no artefato quando quiser os dois sincronizados.
- **Próximos passos para unificar de verdade (ainda não feitos):** servidor com contas (por exemplo Supabase) para guardar progresso e a área do professor, e um serviço próprio para a IA de reconhecimento funcionar fora do Claude. Nunca coloque chaves secretas dentro do `index.html`: qualquer pessoa consegue ler.

## Roteiro sugerido de teste com pessoas

1. Abrir o link e iniciar. Fazer uma lição de leitura e um treino de ouvido.
2. Partitura: escrever 4 notas com a caneta; tocar; apagar; selecionar um compasso e copiar/colar.
3. Importar uma foto ou PDF de partitura como referência.
4. Marcar ✔ ou ✖ no registro ao vivo e mandar o texto copiado.
5. Responder: o que travou? o que foi confuso? o que faltou?

## Limites conhecidos

- A escrita à mão foi calibrada com traços simulados e amostras do iPad do autor; precisa de mais pessoas para melhorar.
- Ornamentos e palavras de andamento (rit., accel.) não alteram o som; a seleção é por compasso.
- Importar PDF não transcreve sozinho ainda (é só para consultar enquanto escreve).
