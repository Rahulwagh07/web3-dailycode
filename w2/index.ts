function bytesToAscii(byteArray: number[]): string {
  return byteArray.map(byte => String.fromCharCode(byte)).join('');
}

const bytes: number[] = [82, 97, 104, 117, 108];
console.log(bytesToAscii(bytes));

function asciiToBytes(asciiString: string): number[] {
  const byteArray: number[] = [];
  for (let i = 0; i < asciiString.length; i++) {
    byteArray.push(asciiString.charCodeAt(i));
  }
  return byteArray;
}

const ascii: string = "Rahul";
const byteArray = asciiToBytes(ascii);
console.log(byteArray);

function decodeBytesToAscii(byteArray: Uint8Array): string {
  return new TextDecoder().decode(byteArray);
}

const bytess = new Uint8Array([82, 97, 104, 117, 108]);
const asciiString = decodeBytesToAscii(bytess);
console.log(asciiString);

function encodeAsciiToBytes(asciiString: string): Uint8Array {
  const byteArray = new Uint8Array(asciiString.length);
  for (let i = 0; i < asciiString.length; i++) {
    byteArray[i] = asciiString.charCodeAt(i);
  }
  return byteArray;
}

const asciiText: string = "Rahul";
const byteArr = encodeAsciiToBytes(asciiText);
console.log(byteArr);   
