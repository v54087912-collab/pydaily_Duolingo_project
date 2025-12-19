#!/usr/bin/env python3
import logging
import requests
from telegram import Update
from telegram.ext import ApplicationBuilder, ContextTypes, CommandHandler, MessageHandler, filters

# Enable logging
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)

# TELEGRAM BOT TOKEN
# Security Warning: In a production environment, use environment variables.
# For this template, we use the provided token.
TOKEN = "8376038033:AAEIJR6iYTxLwZ2aYtv5DVX0_G-3JNSpJ_g"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Sends a welcome message when the command /start is issued."""
    await context.bot.send_message(
        chat_id=update.effective_chat.id,
        text=(
            "Welcome! I am a bot template.\n"
            "Send me a card in the format: cc|mm|yy|cvv\n"
            "Or use /check cc|mm|yy|cvv"
        )
    )

async def check_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Handles the /check command."""
    text = ""
    if context.args:
        text = " ".join(context.args)
    else:
        await context.bot.send_message(
            chat_id=update.effective_chat.id,
            text="Please provide details in format: cc|mm|yy|cvv"
        )
        return

    await process_check(update, text)

async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Handles text messages that match the format."""
    message = update.effective_message
    if not message or not message.text:
        return

    text = message.text
    if "|" in text:
        await process_check(update, text)
    else:
         await context.bot.send_message(
            chat_id=update.effective_chat.id,
            text="Invalid format. Please use: cc|mm|yy|cvv\nOr start with /check"
        )

async def process_check(update: Update, text: str):
    """Parses input and simulates an API call."""
    parts = text.split('|')
    # Basic validation for the format
    if len(parts) < 4:
         await update.message.reply_text("Invalid format. Expected: cc|mm|yy|cvv")
         return

    cc = parts[0].strip()
    mm = parts[1].strip()
    yy = parts[2].strip()
    cvv = parts[3].strip()

    # Mocking the API call
    # In a real scenario, you would call your checker API here.
    # We use httpbin.org to demonstrate the request structure safely.

    api_url = "https://httpbin.org/get"

    # We send masked data to the mock API for privacy in this demonstration
    params = {
        "cc_masked": f"{cc[:6]}******{cc[-4:]}" if len(cc) > 10 else cc,
        "mm": mm,
        "yy": yy,
        "cvv_masked": "***"
    }

    try:
        # Example of a GET request
        response = requests.get(api_url, params=params)
        data = response.json()

        # Simulating a result based on the API response
        reply_text = (
            f"Checked Card: {cc[:6]}******{cc[-4:] if len(cc) > 4 else ''}\n"
            f"Status: API Call Successful (Mock)\n"
            f"Response Origin: {data.get('origin')}\n\n"
            "This bot is a template. It does not perform real credit card validation.\n"
            "It successfully contacted the mock API."
        )

        await update.message.reply_text(reply_text)

    except Exception as e:
        await update.message.reply_text(f"Error checking: {e}")

if __name__ == '__main__':
    # Build the application
    application = ApplicationBuilder().token(TOKEN).build()

    # Add handlers
    start_handler = CommandHandler('start', start)
    check_handler = CommandHandler('check', check_command)
    message_handler = MessageHandler(filters.TEXT & (~filters.COMMAND), handle_message)

    application.add_handler(start_handler)
    application.add_handler(check_handler)
    application.add_handler(message_handler)

    print("Bot is running...")
    application.run_polling()
