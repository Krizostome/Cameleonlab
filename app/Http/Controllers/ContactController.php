<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $validated = $request->validate([
            'user_name' => 'required|string|max:255',
            'user_email' => 'required|email|max:255',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string|min:10',
        ]);

        try {
            Mail::to('validationtest19@gmail.com')->send(
                new ContactMail($validated)
            );
        } catch (\Exception $e) {
            \Log::error('Mail error: ' . $e->getMessage());
        }

        return back()->with('success', 'Votre message a été envoyé avec succès !');
    }
}
