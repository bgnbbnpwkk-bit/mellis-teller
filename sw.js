// Mellis Teller – minimaler Service Worker.
// Zweck: erfüllt die Installierbarkeits-Kriterien von Chrome/Android (registrierter
// SW mit fetch-Handler), damit "Als App installieren" erscheint.
// Bewusst KEIN Caching: so bleibt die automatische Aktualisierung (APP_VERSION-Check
// in index.html) wirksam und es kann nie ein veralteter Stand ausgeliefert werden.
self.addEventListener("install", function (e) { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function (e) { /* Netzwerk-Standard, kein Eingriff */ });
