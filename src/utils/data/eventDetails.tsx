interface EventDetails {
  date: string;
  location: string;
  capacity: string;
  earlyBirdPrice: string;
  regularPrice: string;
}

interface ContactInfo {
  email: string;
  phone?: string;
}

interface SocialMedia {
  linkedin: string;
  discord: string;
}

interface ScheduleItem {
  time: string;
  activity: string;
  description?: string; // Optional description for activities
}

type DaySchedule = ScheduleItem[];

interface Schedule {
  [key: string]: DaySchedule;
}

export const details: EventDetails = {
  date: 'October 15-16, 2024',
  location: 'Innovation Center, Denver, CO',
  capacity: '200 participants',
  earlyBirdPrice: '$149',
  regularPrice: '$199',
};

export const connect: ContactInfo = {
  email: 'info@cubuild.org',
  // phone: '(555) 123-4567',
};

export const socialMediaLinks: SocialMedia = {
  linkedin: 'https://www.linkedin.com/company/cu-build',
  discord: 'https://discord.gg/cubuild',
};

export const schedule: Schedule = {
  'Day 1 - July 17': [
    { time: '9:00 AM', activity: 'Registration & Breakfast', description: 'Check-in, networking, and opening remarks' },
    { time: '10:00 AM', activity: 'Opening Ceremony' },
    { time: '11:00 AM', activity: 'Keynote Speaker' },
    { time: '12:00 PM', activity: 'Lunch' },
    { time: '1:00 PM', activity: 'Workshops & Sessions' },
    { time: '5:00 PM', activity: 'Networking Event' },
  ],
  'Day 2 - July 18': [
    { time: '9:00 AM', activity: 'Breakfast' },
    { time: '10:00 AM', activity: 'Hackathon Begins' },
    { time: '12:00 PM', activity: 'Lunch' },
    { time: '6:00 PM', activity: 'Dinner & Team Presentations' },
  ],
};

// event timeline to disable certain pages and routes
