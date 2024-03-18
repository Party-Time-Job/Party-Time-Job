import { cookies } from 'next/headers';
import getApplication from '@/widgets/api/getApplication';
import ApplicationTable from '@/widgets/Application/ui/ApplicationTableUi';
import { ProfileInterface } from '@/shared/ui/Table/type';

const Application = async ({ page }: { page: number }) => {
  let data;
  let total;
  const MAX_ITEMS = 5;
  const instance = cookies();
  const userId = instance.get('userid')?.value as string;
  const token = instance.get('token')?.value;
  const offset = (page - 1) * MAX_ITEMS;
  const limit = MAX_ITEMS;
  const response = await getApplication(userId, {
    offset,
    limit,
    token,
  });

  if (response instanceof Error) {
    throw new Error();
  } else if (typeof response === 'string') {
    throw new Error(response);
  } else {
    const applications = response.items;
    data = applications.map(application => ({
      id: application.item.id,
      status: application.item.status,
      name: application.item.shop.item.name,
      hourlyPay: application.item.notice.item.hourlyPay,
      startsAt: application.item.notice.item.startsAt,
      workhour: application.item.notice.item.workhour,
    }));
    total = response.count;
  }

  return (
    <ApplicationTable
      data={data as ProfileInterface[]}
      page={page}
      total={total as number}
    />
  );
};

export default Application;
