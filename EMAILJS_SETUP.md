# EmailJS Setup Instructions

## Налаштування EmailJS для відправки повідомлень

### 1. Створення акаунту EmailJS
1. Перейдіть на https://www.emailjs.com/
2. Зареєструйтеся або увійдіть в акаунт
3. Підтвердіть email адресу

### 2. Налаштування Email Service
1. В Dashboard перейдіть до "Email Services"
2. Натисніть "Add New Service"
3. Виберіть ваш email провайдер (Gmail, Outlook, тощо)
4. Налаштуйте підключення до вашого email акаунту
5. Скопіюйте **Service ID** (наприклад: `service_abc123`)

### 3. Створення Email Template
1. Перейдіть до "Email Templates"
2. Натисніть "Create New Template"
3. Налаштуйте шаблон:
   ```
   Subject: New message from {{from_name}}
   
   From: {{from_name}} ({{from_email}})
   Message: {{message}}
   ```
4. Скопіюйте **Template ID** (наприклад: `template_xyz789`)

### 4. Отримання Public Key
1. Перейдіть до "Account" → "General"
2. Скопіюйте **Public Key** (наприклад: `user_abc123def456`)

### 5. Оновлення коду
В файлі `src/pages/Contacts.jsx` замініть наступні значення:

```javascript
const serviceId = 'service_your_service_id'; // Замініть на ваш Service ID
const templateId = 'template_your_template_id'; // Замініть на ваш Template ID  
const publicKey = 'your_public_key'; // Замініть на ваш Public Key
```

### 6. Тестування
1. Запустіть проект: `npm run dev`
2. Перейдіть на сторінку контактів
3. Заповніть форму та відправте тестове повідомлення
4. Перевірте, чи отримали email

### Примітки
- EmailJS безкоштовно дозволяє відправляти до 200 email на місяць
- Для продакшену рекомендується використовувати власний SMTP сервер
- Не зберігайте ключі в публічних репозиторіях
