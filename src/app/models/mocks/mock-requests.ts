import { Request } from '../request.model';

export const REQUESTS: Request[] = [
  { id: 'zyx', requester: 'Dein Versicherer', requesterPublicKey: '1337', note: 'Einblick fuer Bezahlvorgang', duration: 42, treatment: true, attestation: true, recipe: true, Result: {rejected: false, reason: 's ok', treatment: []} },
  { id: 'yxw', requester: 'Dein Arbeitgeber', requesterPublicKey: '4242', note: 'Krankschreibung einsehen', duration: 12, treatment: false, attestation: true, recipe: false, Result: {rejected: false, reason: 'muss ja', treatment: []} },
  { id: 'xwv', requester: 'Facebook', requesterPublicKey: '666', note: 'Vollstaendiger Einblick', duration: 99999999, treatment: true, attestation: true, recipe: true, Result: {rejected: true, reason: 'Warum?', treatment: []} },
  { id: 'wvu', requester: 'Ein Apotheker', requesterPublicKey: '1234', note: 'Ausgabe Medikament', duration: 12, treatment: false, attestation: false, recipe: true, Result: {rejected: false, reason: 'Rezept eingelöst', treatment: []} }
];
