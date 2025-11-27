# Generator Contracte ARDA Manufacturing

Aplicație web pentru generarea automată de contracte, procese verbale și certificate de garanție.

## 🚀 Deploy pe Vercel

### Opțiunea 1: Deploy Direct (Recomandat)

1. **Creează cont pe Vercel**
   - Mergi pe [vercel.com](https://vercel.com)
   - Sign up cu GitHub, GitLab sau email

2. **Upload manual**
   - Click pe "Add New..." → "Project"
   - Click pe "Deploy" tab
   - Drag & drop întregul folder `generator-contracte-vercel` în browser
   - Click "Deploy"

3. **Gata!**
   - Aplicația va fi live în ~30 secunde
   - Vei primi un link de genul: `https://generator-contracte-arda.vercel.app`

### Opțiunea 2: Deploy prin GitHub

1. **Creează repository GitHub**
   ```bash
   cd generator-contracte-vercel
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/generator-contracte.git
   git push -u origin main
   ```

2. **Conectează cu Vercel**
   - Pe Vercel: Click "Add New..." → "Project"
   - Import repository-ul GitHub
   - Click "Deploy"

3. **Auto-deploy**
   - Orice modificare pe GitHub va fi deployed automat

### Opțiunea 3: Vercel CLI

1. **Instalează Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd generator-contracte-vercel
   vercel
   ```

3. **Follow prompts**
   - Login cu Vercel
   - Confirmă setările
   - Aplicația va fi deployed

## 📁 Structura Proiect

```
generator-contracte-vercel/
├── public/
│   └── index.html          # Aplicația completă (HTML + CSS + JS)
├── vercel.json             # Configurare Vercel
├── package.json            # Metadate proiect
└── README.md               # Acest fișier
```

## ✨ Funcționalități

- ✅ Generare Contract Vânzare Rate
- ✅ Generare Proces Verbal Recepție
- ✅ Generare Certificat Garanție
- ✅ Generare Anexa Echipament
- ✅ Template-uri predefinite pentru echipamente
- ✅ Calcul automat rate și scadențe
- ✅ Gestionare accesorii dinamică
- ✅ Previzualizare document
- ✅ Download individual sau pachet complet
- ✅ 100% offline - funcționează fără server

## 🔧 Personalizare

Pentru a modifica aplicația:

1. Editează `public/index.html`
2. Salvează modificările
3. Re-deploy:
   - Drag & drop pe Vercel, SAU
   - `git push` (dacă folosești GitHub), SAU
   - `vercel --prod` (dacă folosești CLI)

## 🌐 Custom Domain

După deploy, poți adăuga un domeniu personalizat:

1. Pe Vercel dashboard → Project Settings → Domains
2. Adaugă domeniu (ex: `contracte.arda.ro`)
3. Actualizează DNS records conform instrucțiunilor Vercel
4. Gata! Aplicația va fi accesibilă la domeniul tău

## 💡 Tips

- **Local testing**: Rulează `npm run dev` pentru testare locală
- **Logs**: Vezi logs în Vercel dashboard
- **Analytics**: Activează Vercel Analytics pentru statistici
- **Backup**: Descarcă întregul folder periodic

## 📞 Support

Pentru probleme sau întrebări despre aplicație, contactează echipa ARDA Manufacturing.

---

**Made with ❤️ for ARDA Manufacturing**
