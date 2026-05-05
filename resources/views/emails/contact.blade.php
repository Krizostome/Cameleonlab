<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px; margin: 0; }
        .container { max-width: 600px; margin: 0 auto; background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { background: #2ECC71; color: #fff; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; margin: -30px -30px 30px -30px; }
        .header h2 { margin: 0; font-size: 1.4rem; }
        .info { margin-bottom: 12px; padding: 12px 15px; background: #f8f9fa; border-radius: 6px; }
        .info strong { color: #2ECC71; display: inline-block; min-width: 80px; }
        .message-box { padding: 20px; background: #f8f9fa; border-left: 4px solid #2ECC71; margin-top: 20px; border-radius: 0 6px 6px 0; white-space: pre-wrap; }
        .message-box strong { color: #333; }
        .footer { margin-top: 30px; text-align: center; color: #999; font-size: 0.85rem; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Nouveau message de contact</h2>
        </div>
        <div class="info"><strong>Nom:</strong> {{ $data['user_name'] }}</div>
        <div class="info"><strong>Email:</strong> {{ $data['user_email'] }}</div>
        @if(!empty($data['subject']))
            <div class="info"><strong>Sujet:</strong> {{ $data['subject'] }}</div>
        @endif
        <div class="message-box">
            <strong>Message:</strong><br><br>
            {{ $data['message'] }}
        </div>
        <div class="footer">
            <p>Message envoyé depuis le formulaire de contact CameleonLab</p>
        </div>
    </div>
</body>
</html>
