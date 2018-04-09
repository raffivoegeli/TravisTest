package com.example.raffi.apostarexample;

import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.TextView;

import java.util.ArrayList;

/**
 * Created by Raffi on 08.03.2018.
 */

public class GameAdapter extends RecyclerView.Adapter<GameViewHolder>{
    private ArrayList<Game> dataset;

    public GameAdapter(ArrayList<Game> games) {
        dataset = games;
    }

    @Override
    public GameViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        LayoutInflater layoutInflater = LayoutInflater.from(parent.getContext());
        View v = layoutInflater.inflate(R.layout.rowlayout_home, parent, false);


        TextView textViewHomeTeamName = (TextView) v.findViewById(R.id.textHomeTeam);
        EditText editTextBetHomeGoal = (EditText) v.findViewById(R.id.betHomeGoal);
        TextView textViewAwayTeamName = (TextView) v.findViewById(R.id.textAwayTeam);
        EditText editTextBetAwayGoal = (EditText) v.findViewById(R.id.betAwayGoal);

        GameViewHolder viewHolder = new GameViewHolder(v, textViewHomeTeamName, editTextBetHomeGoal, textViewAwayTeamName, editTextBetAwayGoal);
        return viewHolder;
    }

    @Override
    public void onBindViewHolder(GameViewHolder holder, int position) {
        final Game game = dataset.get(position);
        holder.homeTeam.setText(game.homeTeamName);
        holder.betHomeGoal.setText(game.betHomeGoal);
        holder.awayTeam.setText(game.awayTeamName);
        holder.betAwayGoal.setText(game.betAwayGoal);
    }

    @Override
    public int getItemCount() {
        return dataset.size();
    }
}
