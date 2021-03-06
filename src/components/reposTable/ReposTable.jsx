/* eslint-disable react/prop-types */
//  libraries
import { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import Link from '@material-ui/core/Link';

//  hooks
import { useSelector } from 'react-redux';

//  utils
import apiService from 'API';

//  styles
import tableIcons from 'styles/tableIcons';
import SnackBar from 'components/snackBar/SnackBar';
import { tableStyles } from './styles';

//  components

export default function ReposTable() {
  const githubUser = useSelector((state) => state.userForm.githubUser);
  const [reposData, setReposData] = useState([]);
  const [loadingTable, setLoadingTable] = useState(false);
  const [errorData, setErrorData] = useState(false);

  useEffect(() => {
    if (githubUser) {
      setLoadingTable(true);
      apiService.getRepos(githubUser)
        .then(({ data }) => {
          setReposData(data.map(({
            language, default_branch: defaultBranch, svn_url: svnUrl, name, description,
          }) => ({
            language, defaultBranch, svnUrl, name, description,
          })));
        })
        .catch(() => { setErrorData(false); })
        .finally(() => { setLoadingTable(false); });
    }
  }, [githubUser]);

  // Esto es innecesario. Solo lo hago para cumplir el requerimiento
  // de los tres caracteres
  const customSearch = (text, rowData) => {
    if (text.length < 3) return true;
    return rowData.name.indexOf(text) !== -1;
  };

  return (
    <>
      <MaterialTable
        title="Lista de Repositorios"
        isLoading={loadingTable}
        data={reposData}
        icons={tableIcons}
        columns={[
          {
            title: 'Lenguaje',
            field: 'language',
            customFilterAndSearch: customSearch,
          },
          {
            title: 'Default Branch',
            field: 'defaultBranch',
            customFilterAndSearch: customSearch,
            align: 'center',
            headerStyle: { textAlign: 'end' },
          },
          {
            title: 'URL Git',
            field: 'svnUrl',
            customFilterAndSearch: customSearch,
            render: ({ svnUrl }) => (
              <Link href={svnUrl} target="_blank" rel="noopener noreferrer">{svnUrl}</Link>
            ),
            cellStyle: {
              width: 150,
              maxWidth: 150,
              overflowWrap: 'break-word',
              wordWrap: 'break-word',
            },
          },
          {
            title: 'Nombre',
            field: 'name',
            customFilterAndSearch: customSearch,
            cellStyle: {
              width: 137,
              maxWidth: 137,
              overflowWrap: 'break-word',
              wordWrap: 'break-word',
            },
          },
          {
            title: 'Descripción',
            field: 'description',
            customFilterAndSearch: customSearch,
            cellStyle: {
              width: 200,
              maxWidth: 200,
              overflowWrap: 'break-word',
              wordWrap: 'break-word',
            },
          },
        ]}
        localization={{
          body: {
            emptyDataSourceMessage: loadingTable ? 'Cargando...' : 'No hay repositorios disponibles.',
          },
        }}
        options={{
          headerStyle: {
            ...tableStyles.headerStyle,
          },
          cellStyle: {
            overflowWrap: 'break-word',
            wordWrap: 'break-word',
          },
          paging: reposData.length > 5,
        }}
      />
      <SnackBar open={errorData} setOpen={setErrorData} />
    </>
  );
}
