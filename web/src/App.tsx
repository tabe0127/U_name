// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { Text, View } from 'react-native';

// const App: React.FC = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>U_name</Text>
//       <Text>アンパンマン</Text>
//       <Text>食パンマン</Text>
//     </View>
//   );
// };

// export default App;

// import React from 'react';
// import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';

// const App = () => {
//   const names = ['ギルド','たすく','たくと','えふじ','小西智樹','あさだん','notch_man','AAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBAA','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a'];

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.listItem}>
//         今近くにいる人
//       </Text>
//       <ScrollView>
//         <View style={styles.listContainer}>
        
//           {names.map((name, index) => (
//             <Text key={index} style={styles.listItem}>
//               • {name}
//             </Text>
//           ))}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   listContainer: {
//     marginTop: 20,
//   },
//   listItem: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
// });

// export default App;


import React from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';

const App = () => {
  const names = ['','ギルド','たすく','たくと','えふじ','小西智樹','あさだん','notch_man'];


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <view style={{flex:1,justifyContent: 'left', alignItems: 'left'}}>
          <Text>
            U_name
          </Text>
        </view>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            ☆今近くにいる人リスト☆
          </Text>
          {names.map((name, index) => (
            <Text key={index} style={styles.listItem}>
              {name}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center', // 縦方向の中央寄せ
    alignItems: 'center', // 横方向の中央寄せ
  },
  listContainer: {
    alignItems: 'center', // 横方向に要素を中央寄せ
  },
  listItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default App;