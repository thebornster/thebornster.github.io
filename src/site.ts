export const site = {
  name: 'Borna Shirvani',
  role: 'Software engineer, Finland',
  pitch: 'I build AI agents, computer vision systems and data pipelines. I won my first three hackathons and placed second at the Junction x Aalto Defence Hackathon.',
  email: '',
  github: 'https://github.com/thebornster',
  linkedin: '',
  resume: '',
};

export function readingTime(text = '') {
  return Math.max(1, Math.round(text.split(/\s+/).length / 230));
}

export function formatDate(date: Date, opts: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' }) {
  return date.toLocaleDateString('en-GB', { ...opts, timeZone: 'UTC' });
}
