import CreateStore from '@/features/Create-Store/CreateStore';

const ResgistStorePage = ({ storeData }) => {
  return <CreateStore initialValues={storeData} />;
};

export default ResgistStorePage;
