import React from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet} from 'react-native';
import { Button } from '@mui/material';

const App = () => {
  const names = ['伊勢','芦沢','えふじ','とまと','やーさん','モリ','ギルド','たすく','たくと','小西智樹','notch_man'];

// Bluetoothデバイスに接続する非同期関数
async function connectBluetooth() {
  try {
    // ユーザーにデバイスを選択させ、選択されたデバイスを取得
    const device = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true,
    });

    console.log(device);
    const server = await device.gatt?.connect();

    // 選択されたデバイスに接続
    const infoService = await server?.getPrimaryService("device_information");

    // デバイス情報サービスに接続
    const characteristics = await infoService?.getCharacteristics();

    // サービスの特性を取得
    const ary = [];
    // 特性の値を読み取り、デコードして配列に格納
    if (characteristics !== undefined) {
      for (const characteristic of characteristics) {
        const value = await characteristic.readValue();
        ary.push(new TextDecoder().decode(value));
  
        // 特性値が変更されたときのイベントリスナーを追加
        // characteristic.addEventListener("characteristicvaluechanged", event => {
        //   console.log(new TextDecoder().decode(event.target?.value));
        // });
  
        // 通知を開始
        await characteristic.startNotifications();
      }
    }
    
    // 読み取った特性の値をコンソールに表示
    console.log(ary);
  } catch (error) {
    // エラーが発生した場合、コンソールにエラーを表示
    console.error(error);
  }
}

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <view style={{flex:1,justifyContent: 'left', alignItems: 'left'}}>
          <Text>
            U_name
          </Text>
        </view>
        <Button variant="contained" className='button' onClick={connectBluetooth}>近くの人を探す</Button>
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