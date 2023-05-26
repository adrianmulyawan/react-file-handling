import React from 'react';
import NavbarComponent from '../components/navbar.component';
import { Document, Page, Text, View, StyleSheet, BlobProvider, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  title: {
    fontSize: '16pt',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    fontSize: '12pt',
  },
});

const MyDocument = () => {
  return (
    <Document>
      <Page size={ 'A4' } style={ styles.page }>
        <View style={ styles.section }>
          <Text style={ styles.title }>Dialog Hujan</Text>
          <View style={ styles.section }>
            <Text>Tak ada yang lebih basah</Text>
            <Text>dari hujan setelah Oktober. Banjir</Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}

const FilePage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container mt-3">
        <h1>File Handling</h1>
        <hr />

        <div style={{ height: '100%' }}>
          <BlobProvider document={ MyDocument() }>
            { ({ url }) => <iframe src={ url } style={{ width: '100%', height: '100%' }} title='Puisi' /> }
          </BlobProvider>
        </div>
        <div style={{ height: '100%' }}>
          <PDFViewer>
            <div style={{ width: '100%', height: '100%' }}>
              <MyDocument />
            </div>
          </PDFViewer>
        </div>
      </div>
    </>
  );
}

export default FilePage;
