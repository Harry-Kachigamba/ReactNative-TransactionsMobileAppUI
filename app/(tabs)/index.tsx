import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, } from "react-native";
import { Icon, Avatar } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

export default function Tab() {
  return (
    <ScrollView style={styles.container}>
  
      <View style={styles.header}>
        <Avatar
          rounded
          source={require("../../assets/images/profile.png")}
          size="small"
        />

        <View style={styles.headerText}>
          <Text style={styles.accountType}>Personal Account</Text>
          <Text style={styles.userName}>James Phiri</Text>
        </View>
        <Avatar
          rounded
          source={require("../../assets/images/bell.png")}
          size="small"
        />
      </View>

      <View style={styles.cardsContainer}>
        <View style={[styles.card, styles.debitCard]}>
          <Text style={styles.cardTitle}>Debit Card</Text>
          <Text style={styles.balanceText}>Total Balance</Text>
          <Text style={styles.cardBalance}>K50, 000</Text>
          <View style={styles.cardFooter}>
            <Icon name="visibility" size={20} />
            <Text style={styles.cardFooterText}>12/05</Text>
          </View>
        </View>

        <View style={[styles.card, styles.creditCard]}>
          <Text style={styles.cardTitle}>Credit Card</Text>
          <Text style={styles.balanceText}>Total Balance</Text>
          <Text style={styles.cardBalance}>K60, 000</Text>
          <View style={styles.cardFooter}>
            <Icon name="visibility" size={20} />
            <Text style={styles.cardFooterText}>12/05</Text>
          </View>
        </View>
      </View>

      <View style={styles.transferSection}>
        <Text style={styles.sectionTitle}>Transfer List</Text>
        <View style={styles.transferList}>
          <TouchableOpacity style={styles.addButton}>
            <Icon name="add" size={24} />
          </TouchableOpacity>
          <Avatar rounded source={require("../../assets/images/profile.png")} />
          <Avatar rounded source={require("../../assets/images/profile.png")} />
          <Avatar rounded source={require("../../assets/images/profile.png")} />
          <Avatar rounded source={require("../../assets/images/profile.png")} />
        </View>
      </View>

      <View style={styles.transactionsSection}>
        <Text style={styles.sectionTitle}>Transactions</Text>
        <View style={styles.transactionItem}>
          <Icon name="arrow-forward" />
          <View>
            <Text style={styles.transactionTitle}>Transfer to Harry</Text>
            <Text style={styles.transactionTime}>Today, 08:23 PM</Text>
          </View>
          <Text style={styles.transactionAmountNegative}>- K5,000</Text>
        </View>

        <View style={styles.transactionItem}>
          <Icon name="coffee" type="font-awesome" />
          <View>
            <Text style={styles.transactionTitle}>Coffee</Text>
            <Text style={styles.transactionTime}>Yesterday, 02:51 PM</Text>
          </View>
          <Text style={styles.transactionAmountNegative}>- K3,500</Text>
        </View>

        <View style={styles.transactionItem}>
          <Icon name="shopping-cart" type="font-awesome" />
          <View>
            <Text style={styles.transactionTitle}>Groceries</Text>
            <Text style={styles.transactionTime}>Yesterday, 08:51 AM</Text>
          </View>
          <Text style={styles.transactionAmountNegative}>- K6,500</Text>
        </View>

        <View style={styles.transactionItem}>
          <Icon name="shopping-bag" type="font-awesome" />
          <View>
            <Text style={styles.transactionTitle}>Clothes Shopping</Text>
            <Text style={styles.transactionTime}>Yesterday, 10:15 AM</Text>
          </View>
          <Text style={styles.transactionAmountNegative}>- K10,500</Text>
        </View>

        <View style={styles.transactionItem}>
          <Icon name="bed" type="font-awesome" />
          <View>
            <Text style={styles.transactionTitle}>Furniture Shopping</Text>
            <Text style={styles.transactionTime}>Yesterday, 02:15 PM</Text>
          </View>
          <Text style={styles.transactionAmountNegative}>- K20,500</Text>
        </View>
      </View>

      <StatusBar style="dark" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },

  headerText: {
    flexDirection: "column",
  },

  accountType: {
    fontSize: 14,
    color: "#666",
    paddingLeft: 3,
  },

  userName: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 5,
  },

  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  card: {
    width: "48%",
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#FFF",
    elevation: 5,
  },

  debitCard: {
    backgroundColor: "#E0BBE4",
  },

  creditCard: {
    backgroundColor: "#FFDFD3",
  },

  balanceText: {
    paddingTop: 4,
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },

  cardBalance: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },

  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardFooterText: {
    fontSize: 12,
    color: "#666",
  },

  transferSection: {
    paddingHorizontal: 20,
    marginTop: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  transferList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#DDD",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  transactionsSection: {
    paddingHorizontal: 20,
    marginTop: 20,
  },

  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginVertical: 5,
  },

  transactionTitle: {
    fontSize: 16,
  },

  transactionTime: {
    fontSize: 12,
    color: '#666',
  },

  transactionAmountNegative: {
    fontSize: 16,
    color: 'red',
  },

});
