import { ProfileInterface } from '@/shared/ui/Table/type';
import {
  ApplicationDataUi,
  NoApplicationDataUi,
} from '@/widgets/Application/ui/ApplicationDataUi';
import { ProfileTable } from '@/shared/ui/Table/Table';
import Pagination from '@/shared/ui/Pagination/Pagination';

export interface ApplicationTableInterface {
  data: ProfileInterface[];
  page: number;
  total: number;
}

/**
 *
 * @param {ProfileInterface[]} data 받아올 데이터
 * @param {number} page 페이지
 * @param {number} total 전체 페이지
 * @returns 프로필 상세에 보여질 테이블 목록
 */

const ApplicationTable = ({ data, page, total }: ApplicationTableInterface) => {
  return (
    <div>
      {page === 1 && data?.length === 0 && <NoApplicationDataUi />}
      {data?.length >= 1 && (
        <ApplicationDataUi>
          <ProfileTable
            data={data}
            pagination={
              <Pagination page={page} showedItems={5} total={total} />
            }
          />
        </ApplicationDataUi>
      )}
    </div>
  );
};

export default ApplicationTable;
