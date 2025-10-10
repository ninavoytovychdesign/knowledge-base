#!/bin/bash

# Автоматичне оновлення Git репозиторію
# Використання: ./update.sh або ./update.sh "ваше повідомлення коміту"

# Кольори для виводу
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔄 Початок оновлення репозиторію...${NC}"

# Перевірка чи є зміни для коміту
if git diff --quiet && git diff --staged --quiet; then
    echo -e "${BLUE}ℹ️  Немає змін для коміту${NC}"
    exit 0
fi

# Додавання всіх файлів
echo -e "${BLUE}📁 Додавання файлів...${NC}"
git add .

# Коміт з повідомленням (використовуємо переданий параметр або "update" за замовчуванням)
COMMIT_MESSAGE=${1:-"update"}
echo -e "${BLUE}💾 Створення коміту: \"${COMMIT_MESSAGE}\"${NC}"
git commit -m "$COMMIT_MESSAGE"

# Перевірка успішності коміту
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Коміт створено успішно${NC}"
    
    # Push до віддаленого репозиторію
    echo -e "${BLUE}🚀 Відправлення на GitLab...${NC}"
    git push
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}🎉 Оновлення завершено успішно!${NC}"
    else
        echo -e "${RED}❌ Помилка при відправленні на GitLab${NC}"
        exit 1
    fi
else
    echo -e "${RED}❌ Помилка при створенні коміту${NC}"
    exit 1
fi
