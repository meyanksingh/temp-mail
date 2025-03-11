export const mockData = {
  email: "user123@tempmail.com",
  inbox: [
    {
      id: "1",
      from: "support@company.com",
      subject: "Welcome to TempMail",
      body: "Your temporary email is now active. You can start receiving emails at this address immediately. This email will be available for the next 10 minutes.",
      received_at: "2024-03-08T10:00:00Z",
    },
    {
      id: "2",
      from: "newsletter@tech-daily.com",
      subject: "Your Tech Daily Newsletter",
      body: "Here are today's top tech stories: 1. New AI breakthrough announced 2. Latest smartphone reviews 3. Upcoming tech events",
      received_at: "2024-03-08T10:15:00Z",
    },
    {
      id: "3",
      from: "no-reply@socialnetwork.com",
      subject: "Confirm Your Account",
      body: "Please confirm your account by clicking the link below: https://socialnetwork.com/confirm?token=abc123",
      received_at: "2024-03-08T10:30:00Z",
    },
  ],
}

export const mockApiDocs = {
  "GET /generate": {
    description: "Generates a temporary email address",
    response: {
      email: "abc123@tempmail.com",
      expires_in: 600,
    },
  },
  "GET /emails?email=abc123@tempmail.com": {
    description: "Fetches received emails",
    response: [
      {
        id: "1",
        from: "support@company.com",
        subject: "Welcome to TempMail",
        body: "Your temporary email is now active.",
        received_at: "2024-03-08T10:00:00Z",
      },
    ],
  },
  "DELETE /email/:id?email=abc123@tempmail.com": {
    description: "Deletes a specific email",
    response: {
      success: true,
      message: "Email deleted successfully",
    },
  },
  "POST /forward": {
    description: "Forwards an email to another address",
    request: {
      temp_email: "abc123@tempmail.com",
      email_id: "1",
      forward_to: "user@example.com",
    },
    response: {
      success: true,
      message: "Email forwarded successfully",
    },
  },
}

