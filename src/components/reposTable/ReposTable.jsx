/* eslint-disable react/prop-types */
//  libraries
import { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import Link from '@material-ui/core/Link';

//  utils
import apiService from 'API';

//  styles
import tableIcons from 'styles/tableIcons';
import SnackBar from 'components/snackBar/SnackBar';
import tableStyles from './styles';

//  components

export default function ReposTable() {
  const [reposData, setReposData] = useState([]);
  const [loadingTable, setLoadingTable] = useState(false);
  const [errorData, setErrorData] = useState(true);

  useEffect(() => {
    setLoadingTable(true);
    apiService.getRepos('BrianBernal')
      .then(({ data }) => {
        setReposData(data.map(({
          language, default_branch: defaultBranch, svn_url: svnUrl, name, description,
        }) => ({
          language, defaultBranch, svnUrl, name, description,
        })));
      })
      .catch(() => { setErrorData(false); })
      .finally(() => { setLoadingTable(false); });
  }, []);

  return (
    <>
      <MaterialTable
        title="Repos List"
        isLoading={loadingTable}
        data={reposData}
        icons={tableIcons}
        columns={[
          {
            title: 'Lenguaje',
            field: 'language',
          },
          {
            title: 'Default Branch',
            field: 'defaultBranch',
            align: 'center',
            headerStyle: { textAlign: 'end' },
          },
          {
            title: 'URL Git',
            field: 'svnUrl',
            render: ({ svnUrl }) => (
              <Link href={svnUrl} target="_blank" rel="noopener noreferrer">{svnUrl}</Link>
            ),
          },
          {
            title: 'Nombre',
            field: 'name',
          },
          {
            title: 'Descripción',
            field: 'description',
            cellStyle: { minWidth: 200 },
          },
        ]}
        options={{
          headerStyle: {
            ...tableStyles.headerStyle,
            textAlign: 'center',
          },
        }}
      />
      <SnackBar open={errorData} setOpen={setErrorData} />
    </>
  );
}
