import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';
import { BlurView } from 'expo-blur';
import styles from '../styles/DashboardHeader.styles';

const RAIO = 58;
const CIRC = 2 * Math.PI * RAIO;

export default function DashboardHeader({ navigation, curso, cursoKey, open, setOpen, CURSOS, setCursoKey }) {
  const offset = CIRC - (curso.aprovadas / curso.meta) * CIRC;

  return (
    <>
      <View style={styles.header}>

        {/* Nav: menu, título, sino */}
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.navTitle}>HourSync</Text>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Pill do curso selecionado */}
        <TouchableOpacity style={styles.coursePill} onPress={() => setOpen(!open)}>
          <Text style={styles.coursePillText} numberOfLines={1}>{curso.nome}</Text>
          <Ionicons
            name={open ? 'chevron-up-outline' : 'chevron-down-outline'}
            size={14} color="#fff"
          />
        </TouchableOpacity>

        {/* Anel de progresso */}
        <View style={styles.ringWrap}>
          <Svg width={150} height={150} viewBox="0 0 150 150">
            <Circle cx={75} cy={75} r={RAIO} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth={12} />
            <Circle
              cx={75} cy={75} r={RAIO}
              fill="none" stroke="#fff" strokeWidth={12}
              strokeDasharray={`${CIRC}`}
              strokeDashoffset={offset}
              strokeLinecap="round"
              rotation={-90} origin="75,75"
            />
          </Svg>
          <View style={styles.ringCenter}>
            <Text style={styles.ringValue}>{curso.aprovadas}H</Text>
            <Text style={styles.ringTotal}>/{curso.meta}h</Text>
          </View>
        </View>

      </View>

      {/* Dropdown de cursos com blur */}
      {open && (
        <BlurView intensity={60} tint="light" style={styles.dropdown}>
          {Object.entries(CURSOS).map(([key, c], index) => (
            <TouchableOpacity
              key={key}
              style={[
                styles.dropdownItem,
                index < Object.keys(CURSOS).length - 1 && styles.dropdownBorder,
              ]}
              onPress={() => { setCursoKey(key); setOpen(false); }}
            >
              <Text style={[styles.dropdownText, cursoKey === key && styles.dropdownTextActive]}>
                {c.nome}
              </Text>
              {cursoKey === key && <Ionicons name="checkmark" size={16} color="#fff" />}
            </TouchableOpacity>
          ))}
        </BlurView>
      )}
    </>
  );
}
