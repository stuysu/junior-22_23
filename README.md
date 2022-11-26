# junior.stuysu.org

The Stuyvesant Junior Caucus (2022-2023) website, developed with Next.js!

## Setup

0. Clone the repository (`git clone https://github.com/achen318/junior.stuysu.org.git`).

1. Change directory to the repository (`cd junior.stuysu.org`).

2. Install dependencies (`npm install`).

3. Create an `.env.local` file with the following environment variables, providing your own values:

| Variable                 | Description                                                                                              |
| ------------------------ | -------------------------------------------------------------------------------------------------------- |
| `SHEETS_API_KEY`         | The API key for the [Google Sheets API](https://developers.google.com/sheets/api/quickstart/nodejs).     |
| `MEMBERS_SPREADSHEET_ID` | The ID of the Google Sheets containing the members data.                                                 |
| `CALENDAR_API_KEY`       | The API key for the [Google Calendar API](https://developers.google.com/calendar/api/quickstart/nodejs). |
| `CALENDAR_ID`            | The ID of the Google Calendar containing the events.                                                     |

4. Run the development server (`npm run dev`).
