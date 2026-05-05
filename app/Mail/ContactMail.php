<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function build()
    {
        return $this->subject('Nouveau message - ' . ($this->data['subject'] ?? 'Sans sujet'))
            ->view('emails.contact')
            ->replyTo($this->data['user_email'], $this->data['user_name']);
    }
}
