import { useState } from "react"
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert
} from "react-native"
import { styles } from "./styles"

import { Participant } from "../../components/Participant"

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState("")

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante",
        "já existe um participante na lista com esse nome"
      )
    }

    // Com esse prevState ele pega os valores antigos, e na segunda o nome que adicionamos
    setParticipants(prevState => [...prevState, participantName])
    // Limpa o estado para ficar vazio apos adicionar um
    setParticipantName("")
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          // Remove o participante quando clica nele
          setParticipants(prevState =>
            prevState.filter(participant => participant !== name)
          )
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
    console.log(`Você removeu o participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Terça, 15 de agosto de 2023 </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor={"#6b6b6b"}
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Adicione participantes a sua lista de presença
          </Text>
        )}
      />
    </View>
  )
}
