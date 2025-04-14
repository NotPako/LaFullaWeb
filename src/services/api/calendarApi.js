
export default async function handler(req, res) {
    const accessToken = req.headers.authorization?.split(' ')[1];
  
    const calendarRes = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    const data = await calendarRes.json();
  
    if (!calendarRes.ok) {
      return res.status(calendarRes.status).json(data);
    }
  
    return res.status(200).json(data);
  }
  