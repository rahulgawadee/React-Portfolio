import React, { useState, useEffect } from 'react';
import { Send, Terminal, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  const [currentCommand, setCurrentCommand] = useState('');
  const [messages, setMessages] = useState([
    { type: 'system', text: 'Initializing contact terminal...' },
    { type: 'system', text: 'Welcome to the contact interface!' },
    { type: 'system', text: 'Type "help" for available commands.' },
  ]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [currentField, setCurrentField] = useState('name');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const handleCommand = (command) => {
    switch (command.toLowerCase()) {
      case 'help':
        setMessages(prev => [...prev, 
          { type: 'user', text: command },
          { type: 'system', text: 'Available commands:' },
          { type: 'system', text: '- help: Show this message' },
          { type: 'system', text: '- clear: Clear the terminal' },
          { type: 'system', text: '- contact: Start contact form' },
        ]);
        break;
      case 'clear':
        setMessages([{ type: 'system', text: 'Terminal cleared.' }]);
        break;
      case 'contact':
        setMessages(prev => [...prev,
          { type: 'user', text: command },
          { type: 'system', text: 'Initializing contact form...' },
          { type: 'system', text: 'Please enter your name:' },
        ]);
        setCurrentField('name');
        break;
      default:
        if (currentField) {
          handleFormInput(command);
        } else {
          setMessages(prev => [...prev,
            { type: 'user', text: command },
            { type: 'system', text: 'Command not recognized. Type "help" for available commands.' },
          ]);
        }
    }
    setCurrentCommand('');
  };

  const handleFormInput = (value) => {
    setFormData(prev => ({ ...prev, [currentField]: value }));
    
    if (currentField === 'name') {
      setMessages(prev => [...prev,
        { type: 'user', text: value },
        { type: 'system', text: 'Please enter your email:' },
      ]);
      setCurrentField('email');
    } else if (currentField === 'email') {
      setMessages(prev => [...prev,
        { type: 'user', text: value },
        { type: 'system', text: 'Please enter your message:' },
      ]);
      setCurrentField('message');
    } else if (currentField === 'message') {
      setMessages(prev => [...prev,
        { type: 'user', text: value },
        { type: 'system', text: 'Message received! Processing your request...' },
        { type: 'system', text: 'Thank you for your message! I will get back to you soon.' },
      ]);
      setCurrentField('');
      // Here you would typically handle the form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-800/80 rounded-lg backdrop-blur-sm border border-emerald-500/20">
          {/* Terminal Header */}
          <div className="border-b border-emerald-500/20 p-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-emerald-400 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> contact.sh
              </span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono">
            <div className="space-y-2 mb-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-start gap-2 ${msg.type === 'user' ? 'text-cyan-400' : 'text-emerald-400'}`}>
                  {msg.type === 'user' ? (
                    <ArrowRight className="w-4 h-4 mt-1" />
                  ) : (
                    <Terminal className="w-4 h-4 mt-1" />
                  )}
                  <span className="text-slate-300">{msg.text}</span>
                </div>
              ))}
            </div>

            {/* Input Line */}
            <div className="flex items-center gap-2 text-emerald-400">
              <ArrowRight className="w-4 h-4" />
              <input
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && currentCommand.trim()) {
                    handleCommand(currentCommand.trim());
                  }
                }}
                className="bg-transparent border-none outline-none flex-1 text-slate-300"
                placeholder="Type a command..."
                autoFocus
              />
              {showCursor && <span className="animate-pulse">|</span>}
            </div>
          </div>
        </div>

        {/* Hint Card */}
        <div className="mt-8 bg-slate-800/50 rounded-lg p-6 border border-emerald-500/10">
          <h3 className="text-emerald-400 font-medium mb-4">Quick Guide</h3>
          <div className="space-y-2 text-slate-300">
            <p>• Type <code className="text-cyan-400">help</code> to see available commands</p>
            <p>• Type <code className="text-cyan-400">contact</code> to start the contact form</p>
            <p>• Type <code className="text-cyan-400">clear</code> to reset the terminal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;