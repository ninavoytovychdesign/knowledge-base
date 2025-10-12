---
title: "Кейс: як AI допоміг зробити прототип"
date: "2025-01-12"
tags: [ai, cursor, prototype, portfolio]
status: draft
authors: [Nina Voytovych]
links:
  - repo: https://github.com/ninavoytovychdesign/knowledge-base
  - site-local: http://localhost:5173/
---

> [!summary] Результат
AI (Cursor + промпти) прискорив створення робочого прототипу портфоліо:
- Згенеровано картки проєктів, модалку, хедер/футер, сторінку Contacts.
- Вирівняно стилі (темна тема: `#000`, текст `#777`, тайтли `#E6E6E6`, картки `#1A1A1A`, бордери `#333`).
- Кнопки/стрілки — градієнт **B6CAFB → BDB3FF**.

### 1) Контекст
- Проєкт: особисте портфоліо (Riverton Group, Vertex Studio, NovaPost, HealthPad).
- Технології: Vite, TailwindCSS, React (або vanilla), Cursor, GitHub, Obsidian.
- Завдання: швидко зібрати екрани **Home / About / Contacts**, інтеракції та стилі.

### 2) Що зробив AI (по блоках)
- **Hero + заголовки:** генерація структури та типографіки; підсвітка акцентів.
- **Картки робіт:** макет, ховер-ефекти (glow/outline), CTA "View more".
- **Модалка кейса:** структура з прев'ю мокапа, опис, кнопка, іконка.
- **Сторінка Contacts:** форма (name/email/message), стилі/валідація, футер.

### 3) Ключові промпти (сирцеві приклади)
```text
"Зроби картку проєкту з ховером Glowing Border у моєму градієнті B6CAFB->BDB3FF, темна тема, бордери #333, фон картки #1A1A1A, тайтли #E6E6E6, опис #777."
```

### 4) Артефакти
- Посилання: [GitHub](https://github.com/ninavoytovychdesign/knowledge-base)
- Локальний сайт: [http://localhost:5173/](http://localhost:5173/)

### 5) Висновки
- AI значно прискорив розробку UI-компонентів
- Промпти з конкретними кольорами та розмірами дають кращі результати
- Ітеративний підхід з поступовим уточненням вимог ефективний
