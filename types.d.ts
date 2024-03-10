interface Notice {
  item: {
    id: string;
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    description: string;
    closed: boolean;
    shop: {
      item: {
        id: string;
        name: string;
        category: string;
        address1: string;
        address2: string;
        description: string;
        imageUrl: string;
        originalHourlyPay: number;
      };
      href: string;
    };
    currentUserApplication: {
      item: {
        id: string; // application.id,
        status: 'pending' | 'accepted' | 'rejected' | 'canceled'; // application.status
        createdAt: string; // application.createdAt
      };
    };
  };
  links: string[];
}
