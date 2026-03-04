import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import Header from '../components/Header'

import appCss from '../styles.css?url'
import { Footer } from '#/components/Footer'

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title:
          'Wakatime For Google Apps Script - Unofficial Wakatime integration for GAS projects',
      },
      {
        name: 'description',
        content:
          'Track coding time in Google Apps Script projects with Wakatime. An unofficial browser extension that brings automatic time tracking to the Apps Script IDE.',
      },
      {
        name: 'keywords',
        content:
          'Wakatime, Google Apps Script, GAS, time tracking, coding stats, browser extension',
      },
      {
        property: 'og:title',
        content: 'Wakatime for Google Apps Script',
      },
      {
        property: 'og:description',
        content:
          'Track coding time in Google Apps Script projects with Wakatime. An unofficial browser extension that brings automatic time tracking to the Apps Script IDE.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="font-sans antialiased [overflow-wrap:anywhere] selection:bg-[rgba(79,184,178,0.24)]">
        <Header />
        {children}
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
