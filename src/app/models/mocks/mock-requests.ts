import { RequestForm } from '../requestForm.model';
import { TREATMENT } from './mock-treatment'

export const REQUESTS: RequestForm[] = [
  { id: 'zyx', date: new Date(0), requester: 'Dein Versicherer', requesterPublicKey: '1337', note: 'Einblick fuer Bezahlvorgang', duration: 42, treatment: true, attestation: true, recipe: true, Result: {rejected: null, reason: 's ok', treatment: TREATMENT} },
  { id: 'yxw', date: new Date(0), requester: 'Dein Arbeitgeber', requesterPublicKey: '4242', note: 'Krankschreibung einsehen', duration: 12, treatment: false, attestation: true, recipe: false, Result: {rejected: null, reason: 'muss ja', treatment: []} },
  { id: 'xwv', date: new Date(0), requester: 'Facebook', requesterPublicKey: '666', note: 'Vollstaendiger Einblick', duration: 99999999, treatment: true, attestation: true, recipe: true, Result: {rejected: true, reason: 'Warum?', treatment: []} },
  { id: 'wvu', date: new Date(0), requester: 'Ein Apotheker', requesterPublicKey: '1234', note: 'Ausgabe Medikament', duration: 12, treatment: false, attestation: false, recipe: true, Result: {rejected: false, reason: 'Rezept eingelöst', treatment: []} }
];
