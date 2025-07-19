interface EventDetails {
  date: string;
  location: string;
  capacity: string;
  earlyBirdPrice: string;
  regularPrice: string;
}

export const details: EventDetails = {
  date: 'October 15-16, 2024',
  location: 'Innovation Center, Denver, CO',
  capacity: '200 participants',
  earlyBirdPrice: '$149',
  regularPrice: '$199',
};

interface ContactInfo {
  email: string;
  phone?: string;
}

export const connect: ContactInfo = {
  email: 'info@cubuild.org',
  // phone: '(555) 123-4567',
};

interface SocialMedia {
  linkedin: string;
  discord: string;
}

export const socialMediaLinks: SocialMedia = {
  linkedin: 'https://www.linkedin.com/company/cu-build',
  discord: 'https://discord.gg/cubuild',
};

interface ScheduleItem {
  time: string;
  activity: string;
  description?: string; // Optional description for activities
}

type DaySchedule = ScheduleItem[];

interface Schedule {
  [key: string]: DaySchedule;
}

export const schedule: Schedule = {
  'Friday | July 17': [
    { time: '8:00 AM - 11:00 AM', activity: 'Registration & Check In', description: 'Coffee and breakfast will be provided to kickstart your day' },
    { time: '10:00 AM', activity: 'Welcome Session', description: 'Get ready for introductions and an overview of CU Build' },
    { time: '12:00 PM', activity: 'Lunch', description: 'Sandwich bar buffet to recharge before the coding frenzy begins' },
    { time: '12:00 PM', activity: 'Start Coding', description: 'No coding until we say "Go"! Cheat sheets provided for Jack Henry access' },
    { time: '6:00 PM', activity: 'Dinner', description: 'A pizza buffet will be brought in to keep your energy high' },
  ],
  'Saturday | July 18': [
    { time: '8:00 AM - 10:00 AM', activity: 'Breakfast', description: 'A hearty breakfast to kickstart your second day of coding' },
    { time: '12:00 PM', activity: 'Lunch', description: 'Enjoy a hot lunch to keep those ideas flowing' },
    { time: '6:00 PM - 9:00 PM', activity: 'Reception & Dinner Buffet', description: 'Take a break, mingle, and enjoy dinner and drinks on us' },
    { time: '12:00 PM', activity: 'Coding Ends', description: 'Submit your final code and get ready for the big day' },
  ],
  'Sunday | July 19': [
    { time: '8:00 AM - 10:00 AM', activity: 'Breakfast', description: 'One last breakfast to get you energized for the final presentations' },
    { time: '9:00 AM - 11:00 AM', activity: 'Teams Present', description: "It's showtime! Tell us your concept story" },
    { time: '11:00 AM - 12:00 PM', activity: 'Final Judging', description: 'Enjoy drinks and snacks while our judges deliberate' },
    {
      time: '12:00 PM',
      activity: 'Awards Presentation',
      description: "The moment we've all been waiting for! Celebrate your achievements with more drinks and snacks",
    },
  ],
};

// event timeline to disable certain pages and routes
